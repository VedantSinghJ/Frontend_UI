import GradientButton from "@/components/GradientButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto lg:p-16 lg:max-w-6xl">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
        Ready to Start Your Digital Art Journey?
      </h2>
      <p className="text-lg lg:text-xl text-gray-600 mt-4">
        Click below to secure your spot & start creating!
      </p>
      <div className="mt-6">
        <GradientButton className="px-8 py-2 text-lg lg:text-xl">Enroll Now</GradientButton>
      </div>
    </div>
  );
};

export default Footer;
