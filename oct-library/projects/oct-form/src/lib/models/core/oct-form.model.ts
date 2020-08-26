import { OctAuditModel } from './oct-audit.model';
import { OctSectionModel } from './oct-section.model';

export class OctFormModel {
    id: number;
    code: number;
    type: string;
    sections: OctSectionModel[];
    audit: OctAuditModel;
}