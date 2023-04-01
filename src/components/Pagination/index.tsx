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
                        <button onClick={handlePrevious}>Prev</button>
                    ) : (
                        null
                    )
                }

                {
                    next ? (
                        <button onClick={handleNext}>NEXT</button>
                    ) : (
                        null
                    )
                }

            </div>
        </C.Container>
    )
}