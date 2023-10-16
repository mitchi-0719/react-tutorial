import Image from "./Image";

export default function Gallery() {
  const imageInfos = [
    {
      href: "favorite-1.jpg",
      src: "favorite-1_th.jpg",
      alt: "Small black bird, black claws, long black slender beak, links to larger version of the image",
    },
    {
      href: "favorite-2.jpg",
      src: "favorite-2_th.jpg",
      alt: "Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image",
    },
    {
      href: "favorite-3.jpg",
      src: "favorite-3_th.jpg",
      alt: "Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image",
    },
    {
      href: "favorite-4.jpg",
      src: "favorite-4_th.jpg",
      alt: "Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image",
    },
  ];

  return (
    <section>
      {imageInfos.map((val) => (
        <Image src={val.src} alt={val.alt} href={val.href} />
      ))}
    </section>
  );
}
