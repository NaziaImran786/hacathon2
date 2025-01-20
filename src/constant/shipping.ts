export interface ShippingResponse {
    label_id: string
    status: string
    shipment_id: string
    tracking_number: string
    shipment_cost: {
      currency: string
      amount: number
    }
    ship_to: {
      name: string
      phone: string
      address_line1: string
      address_line2: string | null
      city_locality: string
      state_province: string
      postal_code: string
      country_code: string
    }
    packages: Array<{
      weight: {
        value: number
        unit: string
      }
      dimensions: {
        unit: string
        length: number
        width: number
        height: number
      }
    }>
    tracking_url: string
    label_download: {
      pdf: string;
      png: string;
      zpl: string;
      href: string;
    };
  }
  
  export interface ShippingFormData {
    name: string
    phone: string
    email: string
    address: string
    address2?: string
    city: string
    state: string
    zipCode: string
    country: string
    weight: number | string;
    length: number | string;
    width: number | string;
    height: number | string;
  }
  
  