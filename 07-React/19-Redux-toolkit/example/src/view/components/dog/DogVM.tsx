import { setDog } from "../../../model/slices/dogSlice";
import { store } from "../../../model/store";

export function fetchDogToStore() {

    const dispatch = store.dispatch;
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dispatch(setDog(data))
        })

}