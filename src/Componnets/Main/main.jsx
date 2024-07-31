import Card from "./Card/card";
import './main.css'
import rug from '../../imgs/rug.png'
import keyBoard from '../../imgs/keyboard.png'
import smartWatch from '../../imgs/smartWatch.png'
import Mouse from '../../imgs/mouse.png'
import AirPods from '../../imgs/airPods.png'
import PowerBank from '../../imgs/poweBank.png'
import WirelessKeyboard from '../../imgs/Wireless keyboard.png'

function Main() {
    

    let data = [
        {id:0, name:'Mars Rug', coins:'100', miqdor:'24', img:rug},
        {id:0, name:'Keyboard sticker', coins:'49', miqdor:'24',img:keyBoard},
        {id:0, name:' Smart watch ', coins:'899', miqdor:'24', img:smartWatch},
        {id:0, name:'Wireless keyboard', coins:'359', miqdor:'24',img:WirelessKeyboard},
        {id:0, name:'Mouse', coins:'350', miqdor:'24',img:Mouse},
        {id:0, name:'AirPods', coins:'459', miqdor:'24',img:AirPods},
        {id:0, name:'Powerbank', coins:'899', miqdor:'24',img:PowerBank},
        {id:0, name:'Smartphone', coins:'2359', miqdor:'24',img:smartWatch},
        {id:0, name:'USB drive', coins:'359', miqdor:'24'},
        {id:0, name:'Playstation 5', coins:'7359', miqdor:'24'},
        {id:0, name:'Yandex Station', coins:'1359', miqdor:'24'},
        {id:0, name:'Planshet Samsung', coins:'4359', miqdor:'24'},
    ]
    return (
        <main className="container">
            <div className="cards">
                <Card data ={data[0]}></Card>
                <Card data ={data[1]}></Card>
                <Card data ={data[2]}></Card>
                <Card data ={data[3]}></Card>
                <Card data ={data[4]}></Card>
                <Card data ={data[5]}></Card>
                <Card data ={data[6]}></Card>
                <Card data ={data[7]}></Card>
                <Card data ={data[8]}></Card>
                <Card data ={data[9]}></Card>
                <Card data ={data[10]}></Card>
                <Card data ={data[11]}></Card>
              
            </div>
        </main>
      );
}

export default Main;