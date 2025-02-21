import {
  IsArray,
  IsBoolean,
  IsDecimal,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

const brands = ['Konica Minolta', 'Kyocera', 'Epson', 'Audley', 'Prixato'];
const categories = [
  'Oficina',
  'Produccion',
  'Inyeccion de Tinta',
  'Artes Graficas',
  'Etiquetas',
  'Plotter',
];

export class CreatePrinterDto {
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsOptional()
  datasheet_url?: string;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  img_url?: string[];

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDecimal()
  price?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsBoolean()
  color?: boolean;

  @IsOptional()
  @IsBoolean()
  rentable?: boolean;

  @IsOptional()
  @IsBoolean()
  sellable?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsString()
  powerConsumption?: string;

  @IsOptional()
  @IsString()
  dimensions?: string;

  @IsOptional()
  @IsInt()
  printVelocity?: number;

  @IsOptional()
  @IsString()
  maxPrintSizeSimple?: string;

  @IsOptional()
  @IsString()
  maxPrintSize?: string;

  @IsOptional()
  @IsString()
  printSize?: string;

  @IsOptional()
  @IsInt()
  maxPaperWeight?: number;

  @IsOptional()
  @IsBoolean()
  duplexUnit?: boolean;

  @IsOptional()
  @IsString()
  paperSizes?: string;

  @IsOptional()
  @IsString()
  applicableOS?: string;

  @IsOptional()
  @IsString()
  printerFunctions?: string;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  barcode?: string[];
}
