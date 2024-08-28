import Image from 'next/image';

const Mapbox = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l+3E4B44(-110.762428,43.478141)/-110.762428,43.478141,14.25/500x500@2x?access_token=${mapboxToken}`;

  return (
    <div>
      <Image
        src={mapUrl}
        alt="Restaurant Location Map"
        layout="responsive"
        width={500}
        height={500}
        quality={100}
        priority={true}
      />
    </div>
  );
};

export default Mapbox;
