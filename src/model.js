import image from "./assets/websitebuilder.png"
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from "./classes/blocks";

export const model = [
    new TitleBlock("Test Title", {
        styles: "background: darkred; color: #fff; text-align: center",
        tag: "h2"
    }),
    new ImageBlock(image, {
        styles: "padding: 2rem 0; display: flex; justify-content: center",
        alt: "my image",
        imageStyles: "width: 500px; height: auto"
    }),
    new TextBlock("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque deleniti", {
        styles: "background: darkblue; color: yellow"
    }),
    new TextColumnsBlock(['1st column', '2nd column', '3rd column'], {
        styles: "padding: 1rem"
    })
]