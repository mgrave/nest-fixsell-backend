import { Controller, Get, Post, Body } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { Public } from '../auth/public.decorator';
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Public()
  @Get('update')
  async updateExchangeRates() {
    await this.currencyService.updateExchangeRates();
    const updatedCurrencies = await this.currencyService.getAllCurrencies();
    return {
      message: 'Exchange rates updated successfully',
      currencies: updatedCurrencies,
    };
  }

  @Post()
  async addCurrency(@Body() createCurrencyDto: CreateCurrencyDto) {
    const currency = await this.currencyService.addCurrency(createCurrencyDto);
    return { message: 'Currency added successfully', currency };
  }

  @Public()
  @Get()
  async getAllCurrencies() {
    const currencies = await this.currencyService.getAllCurrencies();
    return currencies;
  }
}
