import router from "next/router";

const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-right  pb-14 leading-normal tracking-normal text-gray-900"
        style={{ backgroundImage: "url('/bg.svg')" }}
      >
        {showModal ? (
          <>
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="rounded-lg bg-white p-6">
                <button
                  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                  onClick={() => {
                    setShowModal(false);
                    router.push("/");
                  }}
                ></button>
                <h2 className="mb-4 text-lg font-medium">Modal title</h2>
                <p className="mb-4">Modal content goes here</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
