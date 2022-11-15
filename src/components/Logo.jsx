import React, { Component } from "react";
import * as THREE from "three";

class Logo extends Component {

    componentDidMount() {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setSize( 100, 100 );
      renderer.setClearColor ( 0x000000, 0);

      this.mount.appendChild( renderer.domElement );
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );

      var textureAll = []
      var texture1 = new THREE.TextureLoader().load("https://i.imgur.com/G3JfAkf.png")
      var texture2 = new THREE.TextureLoader().load("https://i.imgur.com/6GzNUVw.png")
      var texture3 = new THREE.TextureLoader().load("https://i.imgur.com/8SRi41p.png")
      var texture4 = new THREE.TextureLoader().load("https://i.imgur.com/8N2FwHJ.png")
      var texture5 = new THREE.TextureLoader().load("https://i.imgur.com/rv3ThI6.png")
      var texture6 = new THREE.TextureLoader().load("https://i.imgur.com/eslhMF2.png")
      textureAll.push(new THREE.MeshBasicMaterial( { map: texture1} ));
      textureAll.push(new THREE.MeshBasicMaterial( { map: texture2} ));
      textureAll.push(new THREE.MeshBasicMaterial( { map: texture3} ));
      textureAll.push(new THREE.MeshBasicMaterial( { map: texture4} ));
      textureAll.push(new THREE.MeshBasicMaterial( { map: texture5} ));
      textureAll.push(new THREE.MeshBasicMaterial( { map: texture6} ));

      var cube = new THREE.Mesh( geometry, textureAll );
      scene.add( cube );
      camera.position.z = 2;
      var animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
      };
      animate();
    }
    render() {
      return (
        <div ref={ref => (this.mount = ref)} />
      )
    }
  }

  export default Logo