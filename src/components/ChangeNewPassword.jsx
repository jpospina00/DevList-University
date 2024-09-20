export default function ChangeNewPassword() {
  return (
    <>
      <div className="flex flex-col justify-center gap-9">
        <h1 className="text-secondary1 font-semibold text-[36px] font-montserrat w-[428px] h-[44px]">
          Digite su nueva contraseña
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex min-h-screen min-w-full justify-center items-center">
          <div className="w-[250px] relative">
            <input
              className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
              type="text"
              placeholder=""
              name="username"
              id="username"
            />
            <label
              className="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
              for="username"
            >
              Nueva contraseña
            </label>
            <svg
              className="absolute top-6 left-4"
              fill=""
              width="18"
              height="18"
              viewBox="0 0 344 384"
            >
              <path
                d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
                fill="#6b7280"
              ></path>
            </svg>
            <label className="pt-1 block text-gray-500 text-sm">
              {" "}
              Text helper{" "}
            </label>
          </div>
        </div>
        <div className="flex min-h-screen min-w-full justify-center items-center">
          <div className="w-[250px] relative">
            <input
              className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
              type="text"
              placeholder=""
              name="username"
              id="username"
            />
            <label
              className="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
              for="username"
            >
             Confirmar nueva contraseña
            </label>
            <svg
              className="absolute top-6 left-4"
              fill=""
              width="18"
              height="18"
              viewBox="0 0 344 384"
            >
              <path
                d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
                fill="#6b7280"
              ></path>
            </svg>
            <label className="pt-1 block text-gray-500 text-sm">
              {" "}
              Text helper{" "}
            </label>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <button
            type="submit"
            className="bg-secondary0 w-[192px] rounded-xl h-[50px] text-background font-montserrat rounder-[10px]"
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </>
  );
}
