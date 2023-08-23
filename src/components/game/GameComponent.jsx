"use client";
import Image from 'next/image'

const GameComponent = ({ images }) => {



  return (
    <div>
      <canvas id='canvas1'></canvas>
      <Image id='layer1' src={images.layer1}  alt="Picture of the author" />
      <Image id='layer2' src={images.layer2}  alt="Picture of the author" />
      <Image id='layer3' src={images.layer3}  alt="Picture of the author" />
      <Image id='layer4' src={images.layer4}  alt="Picture of the author" />
      <Image id='layer5' src={images.layer5}  alt="Picture of the author" />
      <Image id='enemy_fly' src={images.enemy_fly}  alt="Picture of the author" />
      <Image id='enemy_plant' src={images.enemy_plant}  alt="Picture of the author" />
      <Image id='enemy_spider_big' src={images.enemy_spider_big}  alt="Picture of the author" />
      <Image id='fire' src={images.fire}  alt="Picture of the author" />
      <Image id='collisionAnimation' src={images.collisionAnimation}  alt="Picture of the author" />
      <Image id='lives' src={images.lives}  alt="Picture of the author" />

      <script type="module" src="./main.js"></script>
    </div>
  );
};

export default GameComponent;
