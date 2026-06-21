import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

// ---- Income Tax Calculator ----
function IncomeTaxCalculator() {
  const [income, setIncome] = useState('');
  const [regime, setRegime] = useState<'new' | 'old'>('new');
  const [investments, setInvestments] = useState('');
  const [hra, setHra] = useState('');
  const [result, setResult] = useState<null | { tax: number; cess: number; total: number; effectiveRate: number }>(null);

  const calculateTax = () => {
    const inc = parseFloat(income) || 0;
    const inv = parseFloat(investments) || 0;
    const hraAmt = parseFloat(hra) || 0;

    let taxableIncome = inc;
    let tax = 0;

    if (regime === 'old') {
      taxableIncome = Math.max(0, inc - inv - hraAmt - 50000); // std deduction
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.2;
      else tax = 112500 + (taxableIncome - 1000000) * 0.3;
    } else {
      taxableIncome = Math.max(0, inc - 75000); // standard deduction new regime
      if (taxableIncome <= 300000) tax = 0;
      else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome <= 900000) tax = 15000 + (taxableIncome - 600000) * 0.1;
      else if (taxableIncome <= 1200000) tax = 45000 + (taxableIncome - 900000) * 0.15;
      else if (taxableIncome <= 1500000) tax = 90000 + (taxableIncome - 1200000) * 0.2;
      else tax = 150000 + (taxableIncome - 1500000) * 0.3;

      // Rebate under 87A for new regime if income <= 7L
      if (inc <= 700000) tax = 0;
    }

    const cess = tax * 0.04;
    const total = tax + cess;
    const effectiveRate = inc > 0 ? (total / inc) * 100 : 0;
    setResult({ tax, cess, total, effectiveRate });
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
          <Calculator className="w-5 h-5 text-neutral-700" />
        </div>
        <div>
          <h3 className="font-bold text-neutral-900">Income Tax Calculator</h3>
          <p className="text-xs text-neutral-500">FY 2024-25 / AY 2025-26</p>
        </div>
      </div>

      {/* Regime Toggle */}
      <div className="flex bg-neutral-100 rounded-xl p-1 mb-6">
        {(['new', 'old'] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRegime(r)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              regime === r ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500'
            }`}
          >
            {r === 'new' ? 'New Regime' : 'Old Regime'}
          </button>
        ))}
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Annual Income (₹)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g. 1000000"
            className="input-base"
          />
        </div>
        {regime === 'old' && (
          <>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">80C Investments (₹)</label>
              <input
                type="number"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                placeholder="Max ₹1,50,000"
                className="input-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">HRA Exemption (₹)</label>
              <input
                type="number"
                value={hra}
                onChange={(e) => setHra(e.target.value)}
                placeholder="Claimed HRA exemption"
                className="input-base"
              />
            </div>
          </>
        )}
      </div>

      <button
        onClick={calculateTax}
        className="w-full py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors"
      >
        Calculate Tax
      </button>

      {result && (
        <div className="mt-6 bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Income Tax</span>
            <span className="font-semibold text-neutral-900">₹{result.tax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Health & Education Cess (4%)</span>
            <span className="font-semibold text-neutral-900">₹{result.cess.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="border-t border-neutral-200 pt-3 flex justify-between">
            <span className="font-bold text-neutral-900">Total Tax Payable</span>
            <span className="font-black text-xl text-neutral-900">₹{result.total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-500">Effective Tax Rate</span>
            <span className="font-semibold text-blue-600">{result.effectiveRate.toFixed(2)}%</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- GST Calculator ----
function GSTCalculator() {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('18');
  const [mode, setMode] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [result, setResult] = useState<null | { baseAmount: number; gstAmount: number; total: number; cgst: number; sgst: number }>(null);

  const calculate = () => {
    const amt = parseFloat(amount) || 0;
    const rate = parseFloat(gstRate) / 100;
    let base = amt;
    let gstAmt = 0;

    if (mode === 'exclusive') {
      gstAmt = amt * rate;
      base = amt;
    } else {
      base = amt / (1 + rate);
      gstAmt = amt - base;
    }

    setResult({
      baseAmount: base,
      gstAmount: gstAmt,
      total: base + gstAmt,
      cgst: gstAmt / 2,
      sgst: gstAmt / 2,
    });
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-lg">🧾</div>
        <div>
          <h3 className="font-bold text-neutral-900">GST Calculator</h3>
          <p className="text-xs text-neutral-500">Calculate GST for any transaction</p>
        </div>
      </div>

      <div className="flex bg-neutral-100 rounded-xl p-1 mb-6">
        {([{ v: 'exclusive', l: 'GST Exclusive' }, { v: 'inclusive', l: 'GST Inclusive' }] as const).map((m) => (
          <button
            key={m.v}
            onClick={() => setMode(m.v)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              mode === m.v ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500'
            }`}
          >
            {m.l}
          </button>
        ))}
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="input-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">GST Rate</label>
          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            className="input-base"
          >
            {['0', '0.1', '0.25', '3', '5', '12', '18', '28'].map((rate) => (
              <option key={rate} value={rate}>{rate}%</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors"
      >
        Calculate GST
      </button>

      {result && (
        <div className="mt-6 bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Base Amount</span>
            <span className="font-semibold text-neutral-900">₹{result.baseAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">CGST ({parseFloat(gstRate) / 2}%)</span>
            <span className="font-semibold text-neutral-900">₹{result.cgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">SGST ({parseFloat(gstRate) / 2}%)</span>
            <span className="font-semibold text-neutral-900">₹{result.sgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Total GST</span>
            <span className="font-semibold text-neutral-900">₹{result.gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="border-t border-neutral-200 pt-3 flex justify-between">
            <span className="font-bold text-neutral-900">Total Amount</span>
            <span className="font-black text-xl text-neutral-900">₹{result.total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- HRA Calculator ----
function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState('');
  const [hraReceived, setHraReceived] = useState('');
  const [rentPaid, setRentPaid] = useState('');
  const [city, setCity] = useState<'metro' | 'non-metro'>('metro');
  const [result, setResult] = useState<null | { exemption: number; taxable: number }>(null);

  const calculate = () => {
    const basic = parseFloat(basicSalary) || 0;
    const hra = parseFloat(hraReceived) || 0;
    const rent = parseFloat(rentPaid) || 0;

    const limit1 = hra;
    const limit2 = (city === 'metro' ? 0.5 : 0.4) * basic;
    const limit3 = Math.max(0, rent - 0.1 * basic);

    const exemption = Math.min(limit1, limit2, limit3);
    const taxable = hra - exemption;

    setResult({ exemption, taxable });
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-lg">🏠</div>
        <div>
          <h3 className="font-bold text-neutral-900">HRA Calculator</h3>
          <p className="text-xs text-neutral-500">House Rent Allowance exemption</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Basic Salary per annum (₹)</label>
          <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} placeholder="Annual basic salary" className="input-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">HRA Received per annum (₹)</label>
          <input type="number" value={hraReceived} onChange={(e) => setHraReceived(e.target.value)} placeholder="Annual HRA from employer" className="input-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Actual Rent Paid per annum (₹)</label>
          <input type="number" value={rentPaid} onChange={(e) => setRentPaid(e.target.value)} placeholder="Annual rent paid" className="input-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">City</label>
          <select value={city} onChange={(e) => setCity(e.target.value as 'metro' | 'non-metro')} className="input-base">
            <option value="metro">Metro (Delhi, Mumbai, Kolkata, Chennai)</option>
            <option value="non-metro">Non-Metro</option>
          </select>
        </div>
      </div>

      <button onClick={calculate} className="w-full py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors">
        Calculate HRA Exemption
      </button>

      {result && (
        <div className="mt-6 bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">HRA Exemption</span>
            <span className="font-black text-xl text-green-600">₹{result.exemption.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-neutral-200 pt-3">
            <span className="text-neutral-600">Taxable HRA</span>
            <span className="font-semibold text-red-600">₹{result.taxable.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex items-start gap-2 mt-2 text-xs text-neutral-400">
            <Info className="w-3 h-3 flex-shrink-0 mt-0.5" />
            Exemption = Minimum of: HRA received, {city === 'metro' ? '50%' : '40%'} of basic, Rent - 10% of basic
          </div>
        </div>
      )}
    </div>
  );
}

// ---- New vs Old Regime ----
function RegimeComparison() {
  const [income, setIncome] = useState('');
  const [deductions80C, setDeductions80C] = useState('');
  const [deductions80D, setDeductions80D] = useState('');
  const [hraExemption, setHraExemption] = useState('');
  const [homeLoanInt, setHomeLoanInt] = useState('');
  const [result, setResult] = useState<null | { old: number; new: number; better: string; saving: number }>(null);

  const computeTax = (taxable: number, isNew: boolean) => {
    let tax = 0;
    if (isNew) {
      if (taxable <= 300000) tax = 0;
      else if (taxable <= 600000) tax = (taxable - 300000) * 0.05;
      else if (taxable <= 900000) tax = 15000 + (taxable - 600000) * 0.1;
      else if (taxable <= 1200000) tax = 45000 + (taxable - 900000) * 0.15;
      else if (taxable <= 1500000) tax = 90000 + (taxable - 1200000) * 0.2;
      else tax = 150000 + (taxable - 1500000) * 0.3;
    } else {
      if (taxable <= 250000) tax = 0;
      else if (taxable <= 500000) tax = (taxable - 250000) * 0.05;
      else if (taxable <= 1000000) tax = 12500 + (taxable - 500000) * 0.2;
      else tax = 112500 + (taxable - 1000000) * 0.3;
      if (taxable <= 500000) tax = 0; // 87A rebate
    }
    return tax * 1.04; // cess
  };

  const compare = () => {
    const inc = parseFloat(income) || 0;
    const c80 = Math.min(parseFloat(deductions80C) || 0, 150000);
    const d80D = parseFloat(deductions80D) || 0;
    const hraEx = parseFloat(hraExemption) || 0;
    const hlInt = Math.min(parseFloat(homeLoanInt) || 0, 200000);

    const oldDeductions = 50000 + c80 + d80D + hraEx + hlInt; // std deduction + others
    const oldTaxable = Math.max(0, inc - oldDeductions);
    const newTaxable = Math.max(0, inc - 75000); // only std deduction in new

    const oldTax = computeTax(oldTaxable, false);
    const newTax = computeTax(newTaxable, true);

    // Rebate for new regime
    const finalNew = inc <= 700000 ? 0 : newTax;

    const better = oldTax < finalNew ? 'old' : 'new';
    const saving = Math.abs(oldTax - finalNew);

    setResult({ old: oldTax, new: finalNew, better, saving });
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-lg">⚖️</div>
        <div>
          <h3 className="font-bold text-neutral-900">New vs Old Regime</h3>
          <p className="text-xs text-neutral-500">Find which saves you more tax</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Annual Income (₹)</label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="Gross annual income" className="input-base" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1.5">80C Investments</label>
            <input type="number" value={deductions80C} onChange={(e) => setDeductions80C(e.target.value)} placeholder="Max 1.5L" className="input-base" />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1.5">80D (Health Ins.)</label>
            <input type="number" value={deductions80D} onChange={(e) => setDeductions80D(e.target.value)} placeholder="Max 50K" className="input-base" />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1.5">HRA Exemption</label>
            <input type="number" value={hraExemption} onChange={(e) => setHraExemption(e.target.value)} placeholder="HRA exempt amount" className="input-base" />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1.5">Home Loan Interest</label>
            <input type="number" value={homeLoanInt} onChange={(e) => setHomeLoanInt(e.target.value)} placeholder="Max 2L (Sec 24b)" className="input-base" />
          </div>
        </div>
      </div>

      <button onClick={compare} className="w-full py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors">
        Compare Regimes
      </button>

      {result && (
        <div className="mt-6 space-y-3">
          <div className={`p-4 rounded-xl border-2 ${result.better === 'old' ? 'border-green-300 bg-green-50' : 'border-neutral-200 bg-neutral-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Old Regime</p>
                <p className="text-2xl font-black text-neutral-900">₹{result.old.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
              </div>
              {result.better === 'old' && (
                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">BETTER</span>
              )}
            </div>
          </div>
          <div className={`p-4 rounded-xl border-2 ${result.better === 'new' ? 'border-green-300 bg-green-50' : 'border-neutral-200 bg-neutral-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">New Regime</p>
                <p className="text-2xl font-black text-neutral-900">₹{result.new.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
              </div>
              {result.better === 'new' && (
                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">BETTER</span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-xl">
            <span className="text-sm font-medium text-blue-800">You save</span>
            <span className="font-black text-blue-700 text-lg">₹{result.saving.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CalculatorsPage() {
  const [activeCalc, setActiveCalc] = useState('income-tax');
  
  const calcs = [
    { id: 'income-tax', label: 'Income Tax', icon: '📊' },
    { id: 'gst', label: 'GST', icon: '🧾' },
    { id: 'hra', label: 'HRA', icon: '🏠' },
    { id: 'regime', label: 'New vs Old Regime', icon: '⚖️' },
  ];

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <Calculator className="w-3 h-3" />
              4 Free Calculators
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
              Free Tax<br />Calculators
            </h1>
            <p className="text-xl text-neutral-500">
              Instant, accurate calculations for income tax, GST, HRA and tax regime comparison.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {calcs.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCalc(c.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCalc === c.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <span>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              {activeCalc === 'income-tax' && <IncomeTaxCalculator />}
              {activeCalc === 'gst' && <GSTCalculator />}
              {activeCalc === 'hra' && <HRACalculator />}
              {activeCalc === 'regime' && <RegimeComparison />}
            </div>

            {/* Right: Info panel */}
            <div className="space-y-5">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                <h3 className="font-bold text-neutral-900 mb-4">
                  {activeCalc === 'income-tax' && 'FY 2024-25 Tax Slabs'}
                  {activeCalc === 'gst' && 'GST Rate Structure'}
                  {activeCalc === 'hra' && 'HRA Exemption Rules'}
                  {activeCalc === 'regime' && 'Key Differences'}
                </h3>
                
                {activeCalc === 'income-tax' && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">New Regime</p>
                    {[
                      ['Up to ₹3L', 'Nil'],
                      ['₹3L – ₹6L', '5%'],
                      ['₹6L – ₹9L', '10%'],
                      ['₹9L – ₹12L', '15%'],
                      ['₹12L – ₹15L', '20%'],
                      ['Above ₹15L', '30%'],
                    ].map(([range, rate]) => (
                      <div key={range} className="flex justify-between text-sm">
                        <span className="text-neutral-600">{range}</span>
                        <span className="font-semibold text-neutral-900">{rate}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeCalc === 'gst' && (
                  <div className="space-y-2">
                    {[
                      ['0%', 'Essential goods — milk, eggs, vegetables'],
                      ['5%', 'Basic necessities — packed food, transport'],
                      ['12%', 'Processed food, medicines, tickets'],
                      ['18%', 'Most services, electronics, restaurants'],
                      ['28%', 'Luxury goods, cars, tobacco, aerated drinks'],
                    ].map(([rate, desc]) => (
                      <div key={rate} className="flex items-start gap-3">
                        <span className="text-sm font-bold text-blue-600 w-10 flex-shrink-0">{rate}</span>
                        <span className="text-sm text-neutral-600">{desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeCalc === 'hra' && (
                  <div className="space-y-3">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      HRA exemption = <strong>Minimum of:</strong>
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-600">
                      <li>Actual HRA received</li>
                      <li>50% of basic salary (metro) / 40% (non-metro)</li>
                      <li>Rent paid – 10% of basic salary</li>
                    </ol>
                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mt-3">
                      <p className="text-xs text-amber-800">
                        💡 If rent paid exceeds ₹1 lakh/year, landlord's PAN is mandatory.
                      </p>
                    </div>
                  </div>
                )}

                {activeCalc === 'regime' && (
                  <div className="space-y-3">
                    {[
                      { label: 'Standard Deduction', old: '₹50,000', new: '₹75,000' },
                      { label: '80C Benefits', old: 'Yes (₹1.5L)', new: 'No' },
                      { label: 'HRA Exemption', old: 'Yes', new: 'No' },
                      { label: '80D (Health)', old: 'Yes', new: 'No' },
                      { label: 'Home Loan (24b)', old: 'Yes (₹2L)', new: 'No' },
                    ].map((item) => (
                      <div key={item.label} className="grid grid-cols-3 gap-2 text-sm">
                        <span className="text-neutral-600 text-xs">{item.label}</span>
                        <span className="font-medium text-neutral-900 text-center text-xs">{item.old}</span>
                        <span className="font-medium text-neutral-900 text-center text-xs">{item.new}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-neutral-950 rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Need expert advice?</p>
                <p className="text-neutral-400 text-sm mb-4">
                  Our CAs provide personalized tax planning to maximize your savings beyond what calculators can show.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
