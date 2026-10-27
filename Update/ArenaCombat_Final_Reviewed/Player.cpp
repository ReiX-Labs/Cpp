#include "Player.h"
#include "Enemy.h"

Player::Player(int initialHealth, int initialmaxHP, int initialDamage, std::size_t initialPotion) :
	health(initialHealth), maxHP(initialmaxHP), damage(initialDamage), potion(initialPotion) { }

void Player::applyDamage(int damageTaken) {
	if (damageTaken <= 0) return;
	if (damageTaken > this->health) this->health = 0;
	else this->health -= damageTaken;
}

void Player::Action(Enemy& enemy) {
	if (this->health <= 0) return;

	if (this->health <= 40 && this->potion > 0) {
		this->health += 30;
		--this->potion;

		if (this->health > this->maxHP) this->health = this->maxHP;
	}else enemy.applyDamage(this->damage);
}

int Player::GetHealth() const {
	return this->health;
}

int Player::GetmaxHP() const {
	return this->maxHP;
}

int Player::GetDamage() const {
	return this->damage;
}

std::size_t Player::GetPotion() const {
	return this->potion;
}

bool Player::isAlive() const {
	return this->health > 0;
}