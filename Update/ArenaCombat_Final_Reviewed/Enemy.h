#pragma once

#include <string>

class Player;

class Enemy {
private:
	std::string name;
	int health;
	int maxHP;
	int damage;
public:
	explicit Enemy(std::string initialName, int initialHealth, int initialmaxHP, int initialDamage);

	virtual ~Enemy(){}

	void dealDamage(Player& player);

	void applyDamage(int damageTaken);

	const std::string& GetName() const;

	int GetHealth() const;

	int GetmaxHP() const;

	int GetDamage() const;

	bool isAlive() const;
};

class Boss : public Enemy {
public:
	explicit Boss(std::string initialName, int initialHealth, int initialmaxHP, int initialDamage);

	~Boss() override {}
};