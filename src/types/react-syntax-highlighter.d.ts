declare module "react-syntax-highlighter" {
  import type { ComponentType, CSSProperties, HTMLProps, Key, ReactNode } from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: { [key: string]: CSSProperties };
    children: string | string[];
    customStyle?: CSSProperties;
    codeTagProps?: HTMLProps<HTMLElement>;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    showInlineLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberContainerStyle?: CSSProperties;
    lineNumberStyle?: CSSProperties | ((lineNumber: number) => CSSProperties);
    wrapLines?: boolean;
    wrapLongLines?: boolean;
    lineProps?: HTMLProps<HTMLElement> | ((lineNumber: number) => HTMLProps<HTMLElement>);
    renderer?: (props: {
      rows: Array<{
        type: "element" | "text";
        value?: string | number;
        tagName?: keyof JSX.IntrinsicElements | ComponentType<any>;
        properties?: { className: any[]; [key: string]: any };
        children?: unknown[];
      }>;
      stylesheet: { [key: string]: CSSProperties };
      useInlineStyles: boolean;
    }) => ReactNode;
    PreTag?: keyof JSX.IntrinsicElements | ComponentType<any>;
    CodeTag?: keyof JSX.IntrinsicElements | ComponentType<any>;
    [key: string]: any;
  }

  export interface createElementProps {
    node: unknown;
    stylesheet: { [key: string]: CSSProperties };
    style?: CSSProperties;
    useInlineStyles: boolean;
    key: Key;
  }

  export const Prism: ComponentType<SyntaxHighlighterProps> & { supportedLanguages?: string[] };
  export const PrismAsync: ComponentType<SyntaxHighlighterProps>;
  export const PrismAsyncLight: ComponentType<SyntaxHighlighterProps>;
  export const PrismLight: ComponentType<SyntaxHighlighterProps> & {
    registerLanguage(name: string, func: unknown): void;
  };
  export const Light: ComponentType<SyntaxHighlighterProps> & {
    registerLanguage(name: string, func: unknown): void;
  };
  export const LightAsync: ComponentType<SyntaxHighlighterProps>;
  export const createElement: (props: createElementProps) => ReactNode;

  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneDark: { [key: string]: import("react").CSSProperties };
}
