#include "Enemy.h"
#include "Player.h"

Enemy::Enemy(std::string initialName, int initialHealth, int initialmaxHP, int initialDamage) 
	: name(initialName), health(initialHealth), maxHP(initialmaxHP), damage(initialDamage){ }

void Enemy::dealDamage(Player& player) {
	player.applyDamage(this->damage);
}

void Enemy::applyDamage(int damageTaken) {
	if (damageTaken <= 0) return;
	if (damageTaken > this->health) this->health = 0;
	else this->health -= damageTaken;
}

const std::string& Enemy::GetName() const {
	return this->name;
}

int Enemy::GetHealth() const {
	return this->health;
}

int Enemy::GetmaxHP() const {
	return this->maxHP;
}

int Enemy::GetDamage() const {
	return this->damage;
}

bool Enemy::isAlive() const {
	return this->health > 0;
}

Boss::Boss(std::string initialName, int initialHealth, int initialmaxHP, int initialDamage)
	: Enemy(initialName, initialHealth, initialmaxHP, initialDamage) {
}

