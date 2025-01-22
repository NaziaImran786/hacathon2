"use client"

import { useState } from "react"
import { Download, Loader2, Package, Truck  } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel,  FormMessage,} from "@/components/ui/form"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Input } from "./ui/input"
import { ShippingFormData, ShippingResponse } from "@/constant/shipping"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Please enter a valid address"),
  address2: z.string().optional(),
  city: z.string().min(2, "Please enter a valid city"),
  state: z.string().min(2, "Please enter a valid state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  country: z.string().min(2, "Please select a country"),
  weight: z.union([z.string().min(1, "Weight is required"), z.number().min(0.1, "Weight must be greater than 0")]),
  length: z.union([z.string().min(1, "Length is required"), z.number().min(0.1, "Length must be greater than 0")]),
  width: z.union([z.string().min(1, "Width is required"), z.number().min(0.1, "Width must be greater than 0")]),
  height: z.union([z.string().min(1, "Height is required"), z.number().min(0.1, "Height must be greater than 0")]),
})

const MOCK_RESPONSE: ShippingResponse = {
  "label_id": "se-16994072",
  "status": "completed",
  "shipment_id": "se-41685364",
  "tracking_number": "9405511899563483177276",
  "shipment_cost": {
    "currency": "usd",
    "amount": 17.54
  },
  "ship_to": {
    "name": "Ali",
    "phone": "+92 444-444-4444",
    "address_line1": "525 S Winchester Blvd",
    "address_line2": null,
    "city_locality": "Karachi",
    "state_province": "Sindh",
    "postal_code": "95128",
    "country_code": "US"
  },
  "packages": [{
    "weight": {
      "value": 20.00,
      "unit": "ounce"
    },
    "dimensions": {
      "unit": "inch",
      "length": 24.00,
      "width": 12.00,
      "height": 6.00
    }
  }],
  "tracking_url": "https://tools.usps.com/go/TrackConfirmAction.action?tLabels=9405511899563483177276",
  "label_download": {
    "pdf": "https://api.shipengine.com/v1/downloads/14/z6tXFbGXLkO-VSXkgqEQbQ/label-16994072.pdf",
    "png": "https://api.shipengine.com/v1/downloads/14/z6tXFbGXLkO-VSXkgqEQbQ/label-16994072.png",
    "zpl": "https://api.shipengine.com/v1/downloads/14/z6tXFbGXLkO-VSXkgqEQbQ/label-16994072.zpl",
    "href": "https://api.shipengine.com/v1/downloads/14/z6tXFbGXLkO-VSXkgqEQbQ/label-16994072.pdf"
  }
}

export function ShippingInformation() {
  const [isLoading, setIsLoading] = useState(false)
  const [shippingResult, setShippingResult] = useState<ShippingResponse | null>(null)

  const form = useForm<ShippingFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "Pakistan",
      weight: 1,
      length: 1,
      width: 1,
      height: 1,
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(data: ShippingFormData) {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setShippingResult(MOCK_RESPONSE)
    setIsLoading(false)
  }

  function downloadLabel(format: 'pdf' | 'png') {
    if (shippingResult) {
      window.open(shippingResult.label_download[format], '_blank')
    }
  }

  if (shippingResult) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-600">
            Shipping Label Created Successfully!
          </CardTitle>
          <CardDescription>
            Your package has been processed and is ready for shipment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 p-6 bg-gray-50 rounded-lg">
            <div className="flex justify-between">
              <span className="font-medium">Tracking Number:</span>
              <span>{shippingResult.tracking_number}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Shipping Cost:</span>
              <span>
                ${shippingResult.shipment_cost.amount.toFixed(2)} {shippingResult.shipment_cost.currency.toUpperCase()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="w-full"
                onClick={() => window.open(shippingResult.tracking_url, "_blank")}
              >
                Track Package
              </Button>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => downloadLabel('pdf')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF Label
              </Button>
            </div>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => downloadLabel('png')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download PNG Label
            </Button>
          </div>
          
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Shipping Details</h3>
            <div className="grid gap-2">
              <p><strong>Name:</strong> {shippingResult.ship_to.name}</p>
              <p><strong>Address:</strong> {shippingResult.ship_to.address_line1}</p>
              <p>
                {shippingResult.ship_to.city_locality}, {shippingResult.ship_to.state_province} {shippingResult.ship_to.postal_code}
              </p>
              <p><strong>Phone:</strong> {shippingResult.ship_to.phone}</p>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() => setShippingResult(null)}
            className="w-full"
          >
            Create Another Shipment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-6 w-6" />
          Shipping Information
        </CardTitle>
        <CardDescription>
          Enter the shipping details for your package
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 2 (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Apt 4B" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Karachi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="Karachi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP Code</FormLabel>
                      <FormControl>
                        <Input placeholder="10001" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Pakistan">United States</SelectItem>
                        <SelectItem value="India">Canada</SelectItem>
                        <SelectItem value="US">Mexico</SelectItem>
                        <SelectItem value="Italy">Mexico</SelectItem>
                        <SelectItem value="UK">Mexico</SelectItem>
                        <SelectItem value="Turkey">Mexico</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  <h3 className="font-semibold">Package Dimensions</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (oz)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            {...field}
                            onChange={e => {
                              const value = e.target.value;
                              return field.onChange(value === '' ? '' : parseFloat(value));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Length (in)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            {...field}
                            onChange={e => {
                              const value = e.target.value;
                              return field.onChange(value === '' ? '' : parseFloat(value));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Width (in)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            {...field}
                            onChange={e => {
                              const value = e.target.value;
                              return field.onChange(value === '' ? '' : parseFloat(value));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height (in)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            {...field}
                            onChange={e => {
                              const value = e.target.value;
                              return field.onChange(value === '' ? '' : parseFloat(value));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Shipping Label...
                </>
              ) : (
                "Create Shipping Label"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}


