interface Celebrities {
  id: number;
  first: string;
  last: string;
  dob: string;
  gender: string;
  email: string;
  picture: string;
  country: string;
  description: string;
}

interface CelebritiesAccordianProps {
  celebrities: Celebrities;
}

const CelebritiesAccordian: React.FC<CelebritiesAccordianProps> = ({
  celebrities,
}) => {
  return (
    <>
      <div>
        <h1>This is an accordian</h1>
      </div>
    </>
  );
};

export default CelebritiesAccordian;
