
//FightCode can only understand your robot
//if its class is called Robot
var cannonRotated = false;
var Robot = function(robot) {
 robot.rotateCannon(0);
 

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(100);
  	robot.callback();

 	

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot;
    robot = ev.robot;
      robot.stop();
    robot.fire();

};

Robot.prototype.onWallCollision = function(ev) {
	var robot;
  robot = ev.robot;
      robot.stop();
  robot.back(20);
  robot.turnLeft(110);  
  robot.ahead(50); 
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot;
    robot = ev.robot;
      robot.stop();
  robot.rotateCannon(-12.5);
  	robot.rotateCannon(12.5);
    robot.rotateCannon(12.5);
  	robot.rotateCannon(-12.5);
  	    robot.fire();
  		robot.back(20); 
  		robot.ahead(5);
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
  	robot.disappear();
};
