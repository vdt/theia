/*
 * Copyright (C) 2017 Ericsson and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { PreferenceChangedEvent } from './preference-event'

export const IPreferenceServer = Symbol("IPreferenceServer")

/**
 * Minimal preference API with basic functionalities
 */
export interface IPreferenceServer {
    has(preferenceName: string): Promise<boolean>;
    get<T>(preferenceName: string): Promise<T | undefined>;
}

export interface IPreferenceClient {
    onDidChangePreference(event: PreferenceChangedEvent): void
}
