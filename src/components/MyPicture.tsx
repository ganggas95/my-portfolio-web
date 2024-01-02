const MyFoto = () => {
  return (
    <div className="w-1/2 flex justify-end">
      <div className="relative h-[40rem] w-[40rem] min-w-[35rem] min-h-[35rem] bg-hero">
        <div
          className="absolute bottom-0 right-[5%] h-[80%] w-[80%] z-[2] bg-cover bg-main bg-no-repeat"
          style={{
            backgroundImage: `url(/images/nizar-no-bg.png)`,
          }}
        />
        <div className="bg-1" />
        <div className="bg-2" />
        <div className="bg-3" />
      </div>
    </div>
  );
};
export default MyFoto;
