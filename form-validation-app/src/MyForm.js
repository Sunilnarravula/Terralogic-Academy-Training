 import MyInput from "./MyInput";

const MyForm = () => {
  const FormConfig = {
    name: {
      label: " Your Name ",
      type: "text",
      validation: { required: true },
    },
    email: {
      label: " Your Email ",
      type: "text",
      validation: { required: true, isEmail: true },
    },
  };

  return (
    <form>
      {Object.keys(FormConfig).map((key) => (
        <MyInput
          key={key}
          label={FormConfig[key].label}
          type={FormConfig[key].type}
        />
      ))}
    </form>
  );
};

export default MyForm;
