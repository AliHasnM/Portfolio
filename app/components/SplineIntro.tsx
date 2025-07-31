"use client";

export default function SplineIntro({ onEnter }: { onEnter: () => void }) {
    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <div className="w-full h-full">
                <iframe src='https://my.spline.design/lowpolylaptopcopy-J0TxklsvH7WAKVYvvPaWYd2I/' frameBorder='0' width='100%' height='100%'></iframe>
            </div>

            <div className="absolute bottom-12 flex justify-center w-full">
                <button
                    onClick={onEnter}
                    className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-neutral-200 transition"
                >
                    Enter Portfolio
                </button>
            </div>
        </div>
    );
}
