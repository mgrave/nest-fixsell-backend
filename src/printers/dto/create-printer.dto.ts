import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsDecimal, IsIn, IsString, IsUrl, isDate } from 'class-validator';
import { Decimal128 } from 'mongoose';

const brands = ['Konica Minolta', 'Kyocera', 'Epson'];
const categories = [
  'Oficina',
  'Produccion',
  'Inyección de Tinta',
  'Artes Gráficas',
  'Etiquetas',
];

export class CreatePrinterDto {
  @IsIn(brands)
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  img_url: [string];

  @IsString()
  description: string;

  @IsDecimal()
  price: Decimal128;

  @IsIn(categories)
  @IsString()
  category: string;

  @IsBoolean()
  //@Transform(({ value} ) => value === 'true')
  color: boolean;

  @IsBoolean()
  //@Transform(({ value} ) => value === 'true')
  rentable: boolean;

  @IsString()
  powerConsumption: string;

  @IsString()
  dimensions: string;

  @IsString()
  printVelocity: string;

  @IsString()
  maxPrintSizeSimple: string;

  @IsString()
  maxPrintSize: string;

  @IsString()
  maxPaperWeight: string;

  @IsBoolean()
  // @Transform(({ value} ) => value === 'true')
  duplexUnit: boolean;

  @IsString()
  paperSizes: string;

  @IsString()
  applicableOS: string;

  @IsUrl()
  datasheetUrl: string;

  @IsString()
  printerFunction: string;

  @IsString()
  barcode: [string];

  @IsDate()
  dealEndDate: Date = null;

  @IsDate()
  dealStartDate: Date = null;

  @IsDecimal()
  dealPrice: Decimal128 = null;
  
  @IsDecimal()
  dealDiscountPercentage: Decimal128 = null;

  @IsBoolean()
  isDeal: boolean = false;

  @IsString()
  dealDescription: string = null;
}
