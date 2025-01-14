﻿using System;
using System.Collections.Generic;

namespace Paymentsense.Coding.Challenge.Api.Models
{
    public class Country
    {
        public string Name { get; set; }
        public string Flag { get; set; }
        public int Population { get; set; }
        public string Capital { get; set; }
        public IEnumerable<string> Timezones { get; set; }
        public IEnumerable<Currency> Currencies { get; set; }
        public IEnumerable<string> AltSpellings { get; set; }
        public IEnumerable<Language> Languages { get; set; }
    }

    public class Currency
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
    }

    public class Language
    {
        public string Iso639_1 { get; set; }
        public string Iso639_2 { get; set; }
        public string name { get; set; }
        public string NativeName { get; set; }
    }
}
