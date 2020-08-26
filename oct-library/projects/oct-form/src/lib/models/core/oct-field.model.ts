import { OctFieldValidationModel } from './oct-field-validation.model';

export class OctFieldModel {
    id: number;
    name: string;
    placeholder: string;
    label: string;
    value: string;
    type: string;
    isValid: boolean;
    validation: OctFieldValidationModel;
    sectionId: number;
}