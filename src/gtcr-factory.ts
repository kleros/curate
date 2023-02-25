import { BigInt } from "@graphprotocol/graph-ts";
import { NewGTCR } from "../generated/GTCRFactory/GTCRFactory";
import { MetaEvidence, Registry } from "../generated/schema";
import { GeneralizedTCR as GeneralizedTCRDataSource } from "../generated/templates";

export function handleNewGTCR(event: NewGTCR): void {
  GeneralizedTCRDataSource.create(event.params._address);

  const registry = new Registry(event.params._address.toHexString());
  registry.metaEvidenceCount = BigInt.fromI32(0);

  const registrationMetaEvidence = new MetaEvidence(registry.id + "-1");
  registrationMetaEvidence.URI = "";
  registrationMetaEvidence.save();

  const clearingMetaEvidence = new MetaEvidence(registry.id + "-2");
  clearingMetaEvidence.URI = "";
  clearingMetaEvidence.save();

  registry.registrationMetaEvidence = registrationMetaEvidence.id;
  registry.clearingMetaEvidence = clearingMetaEvidence.id;
  registry.numberOfItems = BigInt.fromI32(0);
  registry.save();
}
