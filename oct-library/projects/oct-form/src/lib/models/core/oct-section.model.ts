import { OctSectionValidationModel } from './oct-section-validation.model';
import { OctFieldModel } from './oct-field.model';
import { OctButton } from './oct-button.model';
import { OctAuditModel } from './oct-audit.model';

export class OctSectionModel {
    id: number;
    name: string;
    class: string;
    validation: OctSectionValidationModel;
    fields: OctFieldModel[];
    nextBtn: OctButton;
    prevBtn: OctButton;
    audit: OctAuditModel;
}
