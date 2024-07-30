import { Piece } from "../../model/pieces/piecesModel";
import { numberToColumn } from "../board/boardView";

export function renderPiece(piece:Piece){
    try {
        const html = `<img class="piece" src="${piece.type.imageUrl}">`;
        const letter = numberToColumn(piece.position.x)
        if(!letter) throw new Error("no letter")
        const positionElement:HTMLDivElement|null = document.querySelector(`#pos-${piece.position.y}${letter}`);

        if(!positionElement) throw new Error("No position element")
        
            positionElement.innerHTML = html

    } catch (error) {
        console.error(error)
    }
}