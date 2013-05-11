
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.rotateCannon(120);
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    for(var i = 0; i < 100; i++){
    	robot.fire();
  	}
};

// ohhh... we were hit by another robot...
Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
    robot.back(100);
};
