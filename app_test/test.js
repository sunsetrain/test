var app = b4w.require("app");
var data = b4w.require("data");
var scene = b4w.require("scenes");
var main = b4w.require("main");
var transform = b4w.require("transform");
var quat = b4w.require("quat");
// var now = new Date();

app.init({
    canvas_container_id: "container_id",
	physics_enabled: false,
    autoresize: true,
    callback: load_cb
});

function load_cb() {
    data.load("test.json", loaded_cb);
}

function loaded_cb() {
    app.enable_controls();
    app.enable_camera_controls();

	main.append_loop_cb (render);
}

function render () {
  var now = new Date();
	var Cube = scene.get_object_by_name("Cube");
	var sec = now.getSeconds();
  var _angle = (6 * sec) * (Math.PI / 180);
	// var _vec4;
	// var obj_quat = transform.get_rotation(Cube, _vec4);
  //      quat.rotateZ(obj_quat, _angle, obj_quat);
  //      transform.set_rotation_v(Cube, obj_quat);
var obj_quat = transform.set_rotation_euler(Cube, 0, 0, -_angle)
console.log(_angle);
}
