import { OctSectionValidationModel } from './oct-section-validation.model';
import { OctFieldModel } from './oct-field.model';
import { OctButton } from './oct-button.model';

export class OctSectionModel {
    id: number;
    name: string;
    class: string;
    isValid: boolean;
    validation: OctSectionValidationModel;
    fields: OctFieldModel[];
    nextBtn: OctButton;
    prevBtn: OctButton;
}
