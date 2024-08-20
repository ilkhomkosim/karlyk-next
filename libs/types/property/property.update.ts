import { PropertyLocation, PropertyStatus, PropertyType } from '../../enums/property.enum';

export interface PropertyUpdate {
	_id: string;
	propertyType?: PropertyType;
	propertyStatus?: PropertyStatus;
	propertyLocation?: PropertyLocation;
	propertyTitle?: string;
	propertyPrice?: number;
	propertyLeftCount?: number;
	propertyVolumes?: number;
	propertySizes?: number;
	propertyImages?: string[];
	propertyDesc?: string;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
}
