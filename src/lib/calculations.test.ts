import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBroilerBatch, validateCircularConnection } from './calculations';

test('calculateBroilerBatch calculates production, costs and margins accurately', () => {
  const result = calculateBroilerBatch({
    birdCount: 500,
    chickCost: 45,
    feedCostPerKg: 65,
    targetWeightKg: 2.0,
    fcr: 1.55,
    mortalityRatePercent: 4,
    otherCostPerBird: 15,
    salePricePerKg: 175,
  });

  // 500 birds with 4% mortality = 480 surviving birds
  assert.equal(result.survivingBirds, 480);
  // 480 birds * 2.0 kg = 960 kg meat
  assert.equal(result.totalMeatKg, 960);
  // chick total cost: 500 * 45 = 22,500
  assert.equal(result.chickTotalCost, 22500);
  // other total cost: 500 * 15 = 7,500
  assert.equal(result.otherTotalCost, 7500);
  // total revenue: 960 * 175 = 168,000
  assert.equal(result.totalRevenue, 168000);
  // verify net margin positive with these assumptions
  assert.ok(result.netMargin > 0);
  assert.ok(result.costPerKgMeat > 0 && result.costPerKgMeat < 175);
});

test('validateCircularConnection flags raw manure into aquaculture as prohibited', () => {
  const connection = validateCircularConnection('broiler', 'aquaculture');
  assert.ok(connection);
  assert.equal(connection.status, 'prohibited');
});

test('validateCircularConnection allows broiler litter to composting as active plan', () => {
  const connection = validateCircularConnection('broiler', 'resource-recovery');
  assert.ok(connection);
  assert.equal(connection.status, 'active-plan');
});
