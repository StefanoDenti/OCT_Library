import { OctFieldValidationModel } from './oct-field-validation.model';
import { OctAuditModel } from './oct-audit.model';

export class OctFieldModel {
    id: number;
    name: string;
    class: string;
    style: string;
    placeholder: string;
    appearance: string;
    icon: string;
    label: string;
    value: string;
    type: string;
    validation: OctFieldValidationModel;
    sectionId: number;
    audit: OctAuditModel;
}