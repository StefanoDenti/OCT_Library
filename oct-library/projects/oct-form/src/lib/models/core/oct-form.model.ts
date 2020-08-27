import { OctAuditModel } from './oct-audit.model';
import { OctSectionModel } from './oct-section.model';

export class OctFormModel {
    id: number;
    title: string;
    class: string;
    style: string;
    sections: OctSectionModel[];
    audit: OctAuditModel;
}