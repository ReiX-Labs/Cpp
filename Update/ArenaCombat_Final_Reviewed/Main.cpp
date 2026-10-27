#include "Enemy.h"
#include "Player.h"

#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <cstddef>

int main() {
	Player player(120, 120, 25, 2);
	std::vector<std::unique_ptr<Enemy>> enemies;

	enemies.push_back(std::make_unique<Enemy>("Slime", 40, 40, 10));
	enemies.push_back(std::make_unique<Enemy>("Goblin", 55, 55, 15));
	enemies.push_back(std::make_unique<Boss>("Boss", 80, 80, 20));

	std::cout << "===== ARENA COMBAT =====\n\n";
	std::cout << "Player enters the arena!\n";
	std::cout << "HP: " << player.GetHealth() << "/" << player.GetmaxHP();
	std::cout << " | Potions:" << player.GetPotion() << "\n\n";

	int index = 0;
	std::size_t defeated = 0;

	for (auto& enemyPtr : enemies) {
		Enemy& enemy = *enemyPtr;

		if (!player.isAlive()) break;
		std::cout << "\n\n[" << ++index << "] " << enemy.GetName() << "\n";
		while (enemy.isAlive()) {
			if (!player.isAlive()) { 
				std::cout << "Player dead!\n";
				break; 
			}

			const auto potionBefore = player.GetPotion();
			player.Action(enemy);
			if (player.GetPotion() < potionBefore) {
				std::cout << "Player uses Potion!\n";
			}
			else {
				std::cout << "Player attacks " << enemy.GetName() << "!\n";
			}

			if (!enemy.isAlive()) {
				std::cout << enemy.GetName() << " defeated!\n";
				++defeated;
				break;
			}
			std::cout << enemy.GetName() << " HP: " << enemy.GetHealth() << "/" << enemy.GetmaxHP() << "\n";
			enemy.dealDamage(player);
			std::cout << enemy.GetName() << " attack Player! " << "-" << enemy.GetDamage() << " HP\n";
			std::cout << "Player HP: " << player.GetHealth() << "/" << player.GetmaxHP() << "\n\n";
		}
	}

	std::cout << "\n\n===== FINAL RESULT =====\n\n";
	std::cout << "Player HP: " << player.GetHealth() << "/" << player.GetmaxHP() << "\n";
	std::cout << "Enemies defeated: " << defeated << "/" << enemies.size() << "\n";
	std::cout << "Potions remaining: " << player.GetPotion() << "\n";
	if (player.isAlive() && defeated == enemies.size()) {
		std::cout << "Player Win!!";
	}
	else {
		std::cout << "Player defeated!";
	}

}