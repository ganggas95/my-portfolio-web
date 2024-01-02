import clsx from "clsx";

type Props = {
  className?: string;
};

const MyPicture: React.FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={clsx({
        [className || ""]: true,
        "w-full md:w-1/2 flex justify-center md:justify-end": true,
      })}
    >
      <div className="relative h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] min-w-[5rem] min-h-[5rem] md:min-w-[35rem] md:min-h-[35rem] bg-hero">
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
export default MyPicture;
