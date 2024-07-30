export function renderBoard(element: HTMLElement): string | undefined {
    try {
        let html = '<table class="chessBoard">';
        for (let i = 0; i < 8; i++) {
            html += "<tr>"
            for (let j = 0; j < 8; j++) {
                const letter = numberToColumn(j);
                if (!letter) throw new Error("No letter")
                html += `<td id="pos-${i}${letter}" class=${isEven(i) ? isEven(j) ? "black" : "white" : isEven(j) ? "white" : "black"}></td>`
            }
            html += "</tr>"

        }
        html += '</table>'

        element.innerHTML = html;

        const tds = document.querySelectorAll("td");

        tds.forEach(td => td.addEventListener("click", ((ev: any) => {
            if (ev && ev.target && ev.target.id){
               //get the id, and convert it to Position

               //get pieces[0]
               //activate piece[0].changePosition(id) (change in data)

               //render the board again
            }
        })))


    } catch (error) {
        console.error(error)
        return undefined
    }
}
function isEven(num: number): boolean {
    return num % 2 === 0;
}

export function numberToColumn(number: number): string | undefined {
    try {
        switch (number) {
            case 0:
                return "a";
            case 1:
                return "b";
            case 2:
                return "c";
            case 3:
                return "d";
            case 4:
                return "e";
            case 5:
                return "f";
            case 6:
                return "g";
            case 7:
                return "h";
        }
        throw new Error("failed to switch from numbers to letters")
    } catch (error) {
        console.error(error)
        return undefined;
    }

}