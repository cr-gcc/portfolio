import { RiCodeSSlashLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

export function Footer() {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="backdrop-blur-xl border-t border-zinc-200/10">
            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <button
                        type='button'
                        onClick={goToTop}
                        className="h-12 w-12 cursor-pointer inline-flex items-center justify-center rounded-full bg-blue-600 text-zinc-300 shadow-sm transition hover:bg-blue-700 hover:text-white"
                    >
                        <span className="sr-only">Back to top</span>
                        <IoIosArrowUp className="block -translate-y-px" size={22} />
                    </button>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start">
                            <RiCodeSSlashLine
                                size={30}
                                className="
                                cursor-pointer
                                text-zinc-300
                                duration-200
                                hover:text-white
                                hover:scale-110
                                "
                            />
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet
                            culpa cum itaque neque.
                        </p>
                    </div>
                </div>
                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
}