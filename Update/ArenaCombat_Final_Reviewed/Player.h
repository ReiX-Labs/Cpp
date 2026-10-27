#pragma once
#include <cstddef>
class Enemy;

class Player {
private:
	int health;
	int maxHP;
	int damage;
	std::size_t potion;
public:
	explicit Player(int initialHealth, int initialmaxHP, int initialDamage, std::size_t initialPotion);
	
	~Player() {}

	void applyDamage(int damageTaken);

	void Action(Enemy& enemy);

	int GetHealth() const;

	int GetDamage() const;

	int GetmaxHP() const;

	std::size_t GetPotion() const;

	bool isAlive() const;

};