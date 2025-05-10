import { Link } from "react-router-dom";

export default function FeaturedBrands() {
  const brands = [
    {
      name: "Apple",
      logo: "https://cdn-icons-png.freepik.com/512/5969/5969046.png",
      slug: "apple",
    },
    {
      name: "Samsung",
      logo: "https://images.samsung.com/is/image/samsung/assets/bd/about-us/brand/logo/pc/720_600_1.png?$720_N_PNG$",
      slug: "samsung",
    },
    {
      name: "Google",
      logo: "https://img.freepik.com/premium-photo/google-logo-is-shown-white-background_1315971-728.jpg",
      slug: "google",
    },
    {
      name: "Sony",
      logo: "https://logowik.com/content/uploads/images/305_sony.jpg",
      slug: "sony",
    },
    {
      name: "Xiaomi",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpBB1Xn_nwE-baOrnkft_zdAIN7FVyOuaPA&s",
      slug: "xiaomi",
    },
    {
      name: "OnePlus",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCA9ytnUx_n6L6yaJbZ7tpUR1-M5UPa6TKA&s",
      slug: "oneplus",
    },
    {
      name: "Huawei",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQKQ9xVqqUDu6l1HsyUHDjh828LnAwLgTcNedY2mXF9VE4tpuoZQtSoPD3iyAdsTDo6I&usqp=CAU",
      slug: "huawei",
    },
    {
      name: "Oppo",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oDIBg2zyPE1ree8dclglIj_ppBgHGziUhw&s",
      slug: "oppo",
    },
    {
      name: "Vivo",
      logo: "https://logos-world.net/wp-content/uploads/2023/03/Vivo-Logo.png",
      slug: "vivo",
    },
    {
      name: "Motorola",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCiR6dtcVHc4_WzLJlXeol7-pvOQKHQ3yxQ&s",
      slug: "motorola",
    },
    {
      name: "Nokia",
      logo: "https://images.seeklogo.com/logo-png/10/1/nokia-logo-png_seeklogo-100358.png",
      slug: "nokia",
    },
    {
      name: "Asus",
      logo: "https://images.seeklogo.com/logo-png/1/1/asus-logo-png_seeklogo-12597.png",
      slug: "asus",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop by Brand</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            to={`/products/filtered?category=${brand.slug}`}
            className="bg-white rounded-lg p-4 flex flex-col items-center justify-center border hover:shadow-md transition-shadow group"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-medium text-center group-hover:text-blue-600 transition-colors">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
