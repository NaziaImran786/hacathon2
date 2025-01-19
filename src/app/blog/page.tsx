//src\app\blog\page.tsx
import { Mail,  Search, User, Heart,  Calendar } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Mauris at arci non vulputate diam tincidunt nec.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/blog/blog1.png?height=453&width=870",
      author: "Surf Auxion",
      date: "Aug 09 2020"
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/blog/blog2.png?height=453&width=870",
      author: "Surf Auxion",
      date: "Aug 09 2020"
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/blog/blog3.png?height=453&width=870",
      author: "Surf Auxion",
      date: "Aug 09 2020"
    }
  ]

  const recentPosts = [
    {
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/blog/br1.png?height=51&width=70"
    },
    {
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/blog/br2.png?height=51&width=70"
    },
    {
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/blog/br3.png?height=51&width=70"
    },
    {
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/blog/br4.png?height=51&width=70"
    }
  ]

  const saleProducts = [
    {
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
      image: "/blog/bs1.png?height=57&width=70"
    },
    {
      title: "Viverra pulvinar et enim.",
      date: "Aug 09 2020",
      image: "/blog/bs2.png?height=57&width=70"
    },
    {
      title: "Mattis varius donec fdsfd",
      date: "Aug 09 2020",
      image: "/blog/bs3.png?height=57&width=70"
    }
  ]

  const offerProducts = [
    {
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
      image: "/blog/bo1.png?height=80&width=126"
    },
    {
      title: "Sed placerat.",
      price: "$12.00 - $15.00",
      image: "/blog/bo2.png?height=80&width=126"
    },
    {
      title: "Netus proin.",
      price: "$12.00 - $15.00",
      image: "/blog/bo3.png?height=80&width=126"
    },
    {
      title: "Platea in.",
      price: "$12.00 - $15.00",
      image: "/blog/bo4.png?height=80&width=126"
    }
  ]

  return (
    <div className="min-h-screen bg-white mb-[-140px]">
      {/* Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#101750] mb-4">Blog Page</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-black">Home</Link>
            <span>.</span>
            <Link href="/pages" className="text-black">Pages</Link>
            <span>.</span>
            <span className="text-[#FB2E86]">Blog Page</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="space-y-6">
                <Link href="/blog/singleblog">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={870}
                  height={453}
                  className="rounded-lg"
                />
                </Link>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-[#FFE7F9] text-[#151875]">
                    <span className="text-[#FB2E86] mr-2">✎</span>
                    {post.author}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#FFECE2] text-[#151875]">
                    <Calendar className="mr-2 h-4 w-4 text-[#FFA454]" />
                    {post.date}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold text-[#151875]">{post.title}</h2>
                <p className="text-[#8A8FB9]">{post.excerpt}</p>
                <Button variant="link" className="text-[#151875] font-semibold p-0">
                  Read More
                </Button>
              </article>
            ))}
            
            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/blog"><Button className="bg-[#FB2CA8] hover:bg-[#FB2CA8]/90 h-8 w-8 p-0">1</Button></Link>
              <Link href="/blog/singleblog"><Button variant="outline" className="h-8 w-8 p-0 text-[#E0D3F5]">2</Button></Link>
              <Link href="/blog/singleblog"><Button variant="outline" className="h-8 w-8 p-0 text-[#E0D3F5]">3</Button></Link>
              <Link href="/blog/singleblog"><Button variant="outline" className="h-8 w-8 p-0 text-[#E0D3F5]">4</Button></Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Search</h2>
              <div className="relative">
                <Input placeholder="Search For Posts" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Hobbies', 'Women', 'Women', 'Women', 'Women', 'Women'].map((category, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className={`justify-start ${i === 0 ? 'bg-[#F939BF] text-white border-[#F939BF]' : 'text-[#3F509E]'}`}
                  >
                    {category} {i === 0 ? '(14)' : '(21)'}
                  </Button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Recent Post</h2>
              <div className="space-y-4">
                {recentPosts.map((post, i) => (
                  <div key={i} className="flex gap-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={70}
                      height={51}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-[#3F509E]">{post.title}</h3>
                      <p className="text-xs text-[#8A8FB9]">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sale Products */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Sale Product</h2>
              <div className="space-y-4">
                {saleProducts.map((product, i) => (
                  <div key={i} className="flex gap-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={70}
                      height={57}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-[#3F509E]">{product.title}</h3>
                      <p className="text-xs text-[#8A8FB9]">{product.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offer Products */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Offer Product</h2>
              <div className="grid grid-cols-2 gap-4">
                {offerProducts.map((product, i) => (
                  <div key={i} className="space-y-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={126}
                      height={80}
                      className="rounded w-full"
                    />
                    <h3 className="text-sm font-medium text-[#151875] text-center">{product.title}</h3>
                    <p className="text-xs text-[#8A8FB9] text-center">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Follow</h2>
              <div className="flex gap-4">
                <Button size="icon" className="rounded-full bg-[#5625DF]">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button size="icon" className="rounded-full bg-[#FF27B7]">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" className="rounded-full bg-[#37DAF3]">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Tags</h2>
              <div className="flex flex-wrap gap-4">
                {['General', 'Atsanil', 'Insas.', 'Bibsaas', 'Nulla.'].map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i === 1 ? 'text-[#FB2E86]' : 'text-[#151875]'} underline cursor-pointer`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

