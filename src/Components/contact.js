const Contact = () => {
  return (
    <div className="flex flex-col justify-center bg-black mx-auto p-10">
      <div className="pt-10">
        <h2 className="text-3xl mb-4 ml-4 font-bold text-white border-b-2 inline-block">Contact me</h2>
        <p className="text-md font-bold ml-4 text-white">Submit the form to get in touch with me!</p>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <form className="flex flex-col justify-center mx-auto w-full md:w-1/2">
          <label htmlFor="name" className="text-white mt-1 mb-1">Name</label>
          <input className="border-white border-2 bg-black text-white p-2" type="text" name='name'  />
          <label htmlFor="email" className="text-white mt-1 mb-1">Email</label>
          <input className="border-white border-2 bg-black text-white p-2" type="text" name='email' />
          <label htmlFor="message" className="text-white mt-1 mb-1">Message</label>
          <textarea className="border-white border-2 bg-black text-white p-2" name='message' rows='10' ></textarea>
          <button className="text-white hover:scale-110 duration-300 mx-auto mt-4 rounded-sm px-4 py-2 w-36 bg-gradient-to-r from-blue-600 to-gray-500">Contact me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
