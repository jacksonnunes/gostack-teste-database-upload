import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionToBeDeleted = await transactionsRepository.findOne(id);

    if (!transactionToBeDeleted) {
      throw new AppError('This transaction does not exists.');
    }

    await transactionsRepository.remove(transactionToBeDeleted);
  }
}

export default DeleteTransactionService;
