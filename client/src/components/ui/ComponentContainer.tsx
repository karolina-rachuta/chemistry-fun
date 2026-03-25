import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Container.module.css";

type Variant = "pageContainer" | "quizzesContainer" | "quizContainer" | "quizSlide" | "calculatorsContainer" | "calculatorContainer" | "cardContainer";


type Props = {
    variant?: Variant,
    spacing?: boolean,
    className?: string
    children: ReactNode,
}

const VARIANTS: Record<Variant, string> = {
    pageContainer: styles.pageContainer,
    quizzesContainer: styles.quizzesContainer,
    quizContainer: styles.quizContainer,
    quizSlide: styles.quizSlide,
    calculatorsContainer: styles.calculatorsContainer,
    calculatorContainer: styles.calculatorContainer,
    cardContainer: styles.cardContainer,
};



export default function ComponentContainer({
    variant,
    spacing = false,
    className,
    children,
}: Props) {
    return (
        <div
            className={clsx(
                styles.componentContainer,
                spacing && styles.componentSpacing,
                variant && VARIANTS[variant],
                className
            )}
        >
            {children}
        </div>
    );
}
