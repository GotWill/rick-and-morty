import * as C from './styles'

type Props = {
    onPrevious: () => void;
    onNext: () => void;
    prev: string;
    next: string;
}

export function Pagination({ onPrevious, onNext, prev, next }: Props) {

    function handlePrevious() {
        onPrevious()
    }

    function handleNext() {
        onNext()
    }

    return (
        <C.Container>
            <div className="load-more">
                {
                    prev ? (
                        <button onClick={handlePrevious} className='prev'>PREV</button>
                    ) : (
                        null
                    )
                }

                {
                    next ? (
                        <button onClick={handleNext} className='next'>NEXT</button>
                    ) : (
                        null
                    )
                }

            </div>
        </C.Container>
    )
}