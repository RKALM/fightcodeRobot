
//FightCode can only understand your robot
//if its class is called Robot
var cannonRotated = false;
var Robot = function(robot) {

 

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
     robot.turnRight(360);





};

Robot.prototype.onScannedRobot = function(ev) {
    var robot;
    robot = ev.robot;
  	robot.stop();
  	robot.fire();
		robot.ahead(200);
    robot.fire();

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
  	robot.ahead(50);
};
