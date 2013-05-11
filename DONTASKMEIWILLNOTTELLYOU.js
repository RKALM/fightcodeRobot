
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(100);

 	

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
  robot.turnLeft(120);  
  robot.ahead(50);    
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot;
    robot = ev.robot;
    robot.stop();
  	    robot.fire();
  		robot.back(20); 
  		robot.ahead(5);
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
  	robot.disappear();
};
