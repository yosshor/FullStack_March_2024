import './view/styles/global.scss';
import { renderBoard } from './view/board/boardView.ts'
import { pieces } from './model/pieces/piecesModel.ts';
import { renderPiece } from './view/piece/pieceView.ts';

const app = document.querySelector<HTMLDivElement>('#app')


if (app) {
  renderBoard(app);
 

  pieces.forEach(piece => {
    renderPiece(piece)
  })
} 
